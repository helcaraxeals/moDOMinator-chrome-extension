import { scanElements } from 'modominator';

document.addEventListener("DOMContentLoaded", () => {
  const target = document.body;

  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      // Scan added DOM nodes
      const addedNodes = mutation.addedNodes;
      if (addedNodes.length) {
        scanElements(addedNodes);
      }
    });
  });

  var config = {
    // Set to true if mutations to not just target, but also target's descendants are to be observed.
    subtree: true,
    // Set to true if additions and removals of the target node's child elements (including text nodes) are to be observed.
    childList: true,
  };

  observer.observe(target, config);
});
