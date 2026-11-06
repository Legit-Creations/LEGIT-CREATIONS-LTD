import { NextResponse, type NextRequest } from "next/server";

const maintenancePage = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <meta name="theme-color" content="#f4f1ec" />
    <title>Temporarily Unavailable | Legit Creations</title>
    <style>
      :root { color-scheme: light; }
      * { box-sizing: border-box; }
      body {
        min-height: 100vh;
        margin: 0;
        display: grid;
        place-items: center;
        padding: 32px 22px;
        background: #f4f1ec;
        color: #290f05;
        font-family: Arial, Helvetica, sans-serif;
      }
      main { width: min(100%, 680px); }
      .brand {
        margin: 0 0 76px;
        font-size: 13px;
        font-weight: 800;
        letter-spacing: .16em;
      }
      .brand span { font-size: 10px; font-weight: 500; letter-spacing: .08em; }
      .eyebrow {
        margin: 0 0 20px;
        color: #c45d35;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: .18em;
        text-transform: uppercase;
      }
      h1 {
        max-width: 620px;
        margin: 0;
        font-size: clamp(42px, 8vw, 76px);
        line-height: .98;
        letter-spacing: -.065em;
      }
      .message {
        max-width: 490px;
        margin: 26px 0 0;
        color: #625a55;
        font-size: 16px;
        line-height: 1.8;
      }
      .rule { width: 100%; height: 1px; margin: 54px 0 20px; background: #d9d2c9; }
      .footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 12px;
        color: #766e67;
        font-size: 11px;
        letter-spacing: .06em;
      }
      @media (max-width: 520px) {
        .brand { margin-bottom: 60px; }
        .message { font-size: 15px; }
      }
    </style>
  </head>
  <body>
    <main>
      <p class="brand">LEGIT CREATIONS <span>LTD.</span></p>
      <p class="eyebrow">A brief pause</p>
      <h1>We’ll be back shortly.</h1>
      <p class="message">
        Our website is temporarily unavailable while we work on improvements.
        We’re making a few things better behind the scenes. Please check back soon.
      </p>
      <div class="rule"></div>
      <div class="footer">
        <span>LEGIT CREATIONS LTD.</span>
        <span>Performance is the Product.</span>
      </div>
    </main>
  </body>
</html>`;

export function proxy(_request: NextRequest) {
  const maintenanceEnabled = process.env.MAINTENANCE_MODE === "true";
  const isProduction = process.env.VERCEL_ENV === "production";

  if (!maintenanceEnabled || !isProduction) {
    return NextResponse.next();
  }

  return new NextResponse(maintenancePage, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate",
      "Retry-After": "300",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
