from __future__ import annotations

import json
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PORTFOLIO = json.loads(
    (ROOT / "data" / "research-portfolio.json").read_text(encoding="utf-8")
)


class PublicSiteTests(unittest.TestCase):
    def test_research_portfolio_keeps_the_governed_topics(self) -> None:
        names = {project["name"] for project in PORTFOLIO["projects"]}
        self.assertEqual(
            names,
            {
                "Semantic-MR",
                "Wiki-Link Retrieval",
                "Tenet",
                "NewGammaFresh",
                "TA-RAG",
                "Temporal RAG",
                "GRACE",
                "BriskSeed",
            },
        )

    def test_only_public_organization_links_are_emitted(self) -> None:
        allowed = (
            "https://github.com/DataSysResearch/",
            "https://github.com/RIDE-Lab/",
        )
        for project in PORTFOLIO["projects"]:
            url = project["url"]
            self.assertTrue(url is None or url.startswith(allowed), project["name"])

        linked = {project["name"] for project in PORTFOLIO["projects"] if project["url"]}
        self.assertEqual(linked, {"Wiki-Link Retrieval", "GRACE", "BriskSeed"})


if __name__ == "__main__":
    unittest.main()
