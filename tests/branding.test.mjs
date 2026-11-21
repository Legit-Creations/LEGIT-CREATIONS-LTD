import assert from "node:assert/strict";
import test from "node:test";
import {
  generateOrganizationSchema,
  normalizeSiteUrl,
  toSiteUrl,
} from "../src/config/branding.ts";

test("normalizes a site URL to its origin", () => {
  assert.equal(
    normalizeSiteUrl(" https://www.example.com/company/?ref=home "),
    "https://www.example.com",
  );
});

test("rejects non-HTTP protocols and uses the configured fallback", () => {
  assert.equal(
    normalizeSiteUrl("javascript:alert(1)", "https://fallback.example/path"),
    "https://fallback.example",
  );
});

test("uses the canonical origin for absolute asset URLs", () => {
  assert.equal(toSiteUrl("/logo.jpeg"), "https://legitcreations.com.ng/logo.jpeg");
  assert.equal(toSiteUrl("assets/brand.svg"), "https://legitcreations.com.ng/assets/brand.svg");
});

test("generates schema identifiers and assets from the normalized origin", () => {
  const [organization] = generateOrganizationSchema()["@graph"];

  assert.equal(organization["@id"], "https://legitcreations.com.ng/#organization");
  assert.equal(organization.logo, "https://legitcreations.com.ng/logo.jpeg");
  assert.equal(organization.svg, "https://legitcreations.com.ng/logo.svg");
});
