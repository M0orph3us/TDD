import {
  perimetre,
  aireFace,
  airCube,
  volumeCube,
} from "../../cube/geometrie.js";

import Cube from "../../cube/Cube.js";

// Etape 3
describe("Test périmètre", function () {
  it("Le resultat devrait être 36cm", async function () {
    const { expect } = await import("chai");
    const resultat = perimetre(3);
    expect(resultat).to.equal(36);
  });
});

// Etape 4
describe("Test aire d'une face du cube", function () {
  it("Le resultat devrait être 9cm2", async function () {
    const { expect } = await import("chai");
    const resultat = aireFace(3);
    expect(resultat).to.equal(9);
  });
});

// Etape 5
describe("Test aire du cube", function () {
  it("Le resultat devrait être 54cm2", async function () {
    const { expect } = await import("chai");
    const resultat = airCube(3);
    expect(resultat).to.equal(54);
  });
});

// Etape 6
describe("Test volume du cube", function () {
  it("Le resultat devrait être 27cm3", async function () {
    const { expect } = await import("chai");
    const resultat = volumeCube(3);
    expect(resultat).to.equal(27);
  });
});

// Etape 7
describe("Géométrie cube class", function () {
  it("Le resultat devrait être 36cm", async function () {
    const { expect } = await import("chai");
    const cube = new Cube(3);
    expect(cube.perimetre()).to.equal(36);
  });

  it("Le resultat devrait être 9cm2", async function () {
    const { expect } = await import("chai");
    const cube = new Cube(3);
    expect(cube.aireFace()).to.equal(9);
  });

  it("Le resultat devrait être 54cm2", async function () {
    const { expect } = await import("chai");
    const cube = new Cube(3);
    expect(cube.airCube()).to.equal(54);
  });

  it("Le resultat devrait être 27cm3", async function () {
    const { expect } = await import("chai");
    const cube = new Cube(3);
    expect(cube.volumeCube()).to.equal(27);
  });
});
