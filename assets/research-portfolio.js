(() => {
  const container = document.querySelector("[data-research-portfolio]");
  if (!container) return;

  const status = container.querySelector("[data-research-status]");
  const source = container.dataset.source;

  const addText = (parent, className, text, element = "span") => {
    const node = document.createElement(element);
    node.className = className;
    node.textContent = text;
    parent.append(node);
    return node;
  };

  fetch(source)
    .then((response) => {
      if (!response.ok) throw new Error(`portfolio request failed: ${response.status}`);
      return response.json();
    })
    .then((manifest) => {
      if (manifest.schema_version !== 1 || !Array.isArray(manifest.projects)) {
        throw new Error("unsupported research portfolio manifest");
      }

      const fragment = document.createDocumentFragment();
      manifest.projects.forEach((project) => {
        const card = document.createElement(project.url ? "a" : "article");
        card.className = `research-card${project.url ? "" : " is-unlinked"}`;
        if (project.url) card.href = project.url;

        const head = document.createElement("div");
        head.className = "research-card-head";
        addText(head, "research-card-code", project.code);
        addText(head, "research-card-stage", project.stage);
        card.append(head);
        addText(card, "", project.name, "h3");
        addText(card, "", project.summary, "p");
        addText(card, "research-card-role", project.role);
        fragment.append(card);
      });

      container.replaceChildren(fragment);
    })
    .catch((error) => {
      status.textContent = "The research portfolio could not be loaded. Open the versioned manifest for the current record.";
      status.title = error.message;
    });
})();
