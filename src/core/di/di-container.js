/**
 * Dependency Injection Container
 * @class DiContainer
 * @description A simple dependency injection container that allows you to register
 * and get dependencies
 * @example
 * const container = new DiContainer();
 * container.register("LandingPageRepository", [], () => new LandingPageRepository());
 * container.register(
 *  "LandingPageService",
 *  ["LandingPageRepository"],
 *  (landingPageRepository) => new LandingPageService(landingPageRepository),
 * );
 *
 * const landingPageService = container.get("LandingPageService");
 */
class DiContainer {
  constructor() {
    this.dependencies = {};
  }

  /**
   * Register a dependency
   * @param name - Name of the dependency (ex: "LandingPageRepository")
   * @param dependencies - Array of dependencies (ex: ["LandingPageRepository"])
   * @param func - Function that returns the dependency
   */
  register(name, dependencies, func) {
    if (
      typeof name !== "string" ||
      !Array.isArray(dependencies) ||
      typeof func !== "function"
    ) {
      throw new Error("Invalid argument");
    }

    this.dependencies[name] = {
      dependencies,
      func,
    };
  }

  /**
   * Get a dependency
   * @param name - Name of the dependency (ex: "LandingPageRepository")
   * @return {*}
   */
  get(name) {
    if (!this.dependencies[name]) {
      throw new Error(`Dependency not found: ${name}`);
    }

    const { dependencies, func } = this.dependencies[name];

    const dependenciesInstances = dependencies.map((dependency) =>
      this.get(dependency),
    );

    return func(...dependenciesInstances);
  }
}

export const container = new DiContainer();
