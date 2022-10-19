(function(window, undefined) {
  var dictionary = {
    "63d7ab3f-6e11-4824-b008-88f4738ba4a4": "home-pg",
    "5e54aab5-e2b4-4d0d-9b3c-ba33c25740fa": "itemdet-pg",
    "41717d67-5531-4c4e-bb6c-cd986cf1b1eb": "Create",
    "20f5c462-a505-4843-8b1e-f524ddb1e926": "cart-pg",
    "b1c43556-0b39-4b36-aa98-6d9299e7ddbe": "fav-option2",
    "352d6060-bafb-4ffe-a4a7-1f4ffdd84947": "ship-pg",
    "86a6537e-2105-42d0-93ce-912b41141c52": "profile-pg",
    "67bf11e0-8c87-4a7a-9538-5095d8444588": "checkout-pg",
    "b8e19ad3-7b31-40d7-adde-5eff67c524d3": "cart-del-pg",
    "79d780ed-2b68-4e31-987f-2406bc7a2545": "fav-option1",
    "3fe884e2-9336-45a6-9137-041c03499146": "pay-pg",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "loading-pg",
    "c1fc90c6-6c2d-4414-8f5b-82f17d0427c1": "signin-pg",
    "911e26fd-cfe2-4b27-84fd-4c9ff61d0c0b": "order-confirm-pg",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);