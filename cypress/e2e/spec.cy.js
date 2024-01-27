describe("Qtify Automation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  describe("Cards Tests", () => {
    before(() => cy.stubApiCalls());

    it("should match the count of top, and new album cards with their respective API responses", () => {
      // Check top albums
      cy.wait("@getTopAlbums").then((interception) => {
        const topAlbums = interception.response.body;
        let topAlbumElements = [];
        
        topAlbums.forEach((album) => {
          cy.get("body")
            .contains(album.title)
            .should("exist")
            .then(($title) => {
              if (album.title.length > 0) {
                topAlbumElements.push(album.title);
              }
            });
        });

        // After checking all top albums, assert the count
        cy.wrap(topAlbumElements).should("have.length", topAlbums.length);
      });

      // Check new albums
      cy.wait("@getNewAlbums").then((interception) => {
        const newAlbums = interception.response.body;
        let newAlbumElements = [];

        newAlbums.forEach((album) => {
          cy.get("body")
            .contains(album.title)
            .should("exist")
            .then(($title) => {
              if ($title.length > 0) {
                newAlbumElements.push(album.title);
              }
            });
        });
        // After checking all new albums, assert the count
        // console.log(newAlbums.length);
        cy.wrap(newAlbumElements).should("have.length", newAlbums.length);
      });
    });
  });
});
