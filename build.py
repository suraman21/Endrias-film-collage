#!/usr/bin/env python3
"""Static site builder for the HTML/CSS/JS conversion.

Reads _build/partials/head.html, _build/partials/header.html, _build/partials/footer.html
and _build/pages/*.html bodies, then writes flat .html files at repo root.
No runtime dependency: output is plain static HTML.
"""
import pathlib, re, sys

ROOT = pathlib.Path(__file__).parent
SRC = ROOT / "_build"

PAGES = {
    "index.html": dict(
        title="Endrias Film College — From Imagination to the Cinema Screen | Addis Ababa",
        desc=("Endrias Film College PLC, 4 Kilo, Addis Ababa. AAETQAA-accredited TVET Level I–IV "
              "filmmaking diplomas and 1-month to 1-year studio certificates."),
        scripts='<script src="assets/js/pages/home.js"></script>',
    ),
    "programs.html": dict(
        title="Programs & 21 Course Modules — Endrias Film College",
        desc="Six academic tiers from a 1-month VIP class to the 2-year TVET Level IV Filmmaking Diploma.",
        scripts='<script src="assets/js/pages/programs.js"></script>',
    ),
    "about.html": dict(
        title="About & Accreditation — Endrias Film College",
        desc="AAETQAA TVET accreditation history, campus, timeline milestones and institutional dossier.",
        scripts='<script src="assets/js/pages/about.js"></script>',
    ),
    "faculty.html": dict(
        title="Faculty & Guest Mentors — Endrias Film College",
        desc="MA/MFA university lecturers, award-winning directors and international guest masterclass mentors.",
        scripts='<script src="assets/js/pages/faculty.js"></script>',
    ),
    "showcase.html": dict(
        title="Endi Award & Student Showcase — Endrias Film College",
        desc="The Endi Award ceremony, 12 craft & ethics categories, graduation records and Guma Award quota.",
        scripts='<script src="assets/js/pages/showcase.js"></script>',
    ),
    "careers.html": dict(
        title="Careers & Zero-Commission Job Placement — Endrias Film College",
        desc="Live crew and studio job listings for Endrias graduates, plus the zero-commission placement pledge.",
        scripts='<script src="assets/js/pages/careers.js"></script>',
    ),
    "admissions.html": dict(
        title="Admissions & 2019 E.C. Registration — Endrias Film College",
        desc="Pre-register online, pick your shift, and receive your application slip code.",
        scripts='<script src="assets/js/pages/admissions.js"></script>',
    ),
}


def main() -> int:
    head = (SRC / "partials" / "head.html").read_text()
    header = (SRC / "partials" / "header.html").read_text()
    footer = (SRC / "partials" / "footer.html").read_text()

    for name, meta in PAGES.items():
        body_path = SRC / "pages" / name
        if not body_path.exists():
            print(f"  ! missing body: {body_path}")
            continue
        body = body_path.read_text()
        out = (
            head.replace("{{TITLE}}", meta["title"]).replace("{{DESC}}", meta["desc"])
            + header
            + body
            + footer.replace("{{PAGE_SCRIPTS}}", meta["scripts"])
        )
        (ROOT / name).write_text(out)
        print(f"  ✓ {name}  ({len(out):,} bytes)")

    # sanity: report any leftover placeholder
    for p in ROOT.glob("*.html"):
        txt = p.read_text()
        leftover = re.findall(r"\{\{[A-Z_]+\}\}", txt)
        if leftover:
            print(f"  ! {p.name} has unresolved placeholders: {set(leftover)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
