// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./annalyns-infiltration.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Now help Annalyn free her best friend!

/**
 * The fast attack is available when the knight is sleeping
 *
 * @param {boolean} knightIsAwake
 *
 * @return {boolean} Whether or not you can execute a fast attack.
 */
export function canExecuteFastAttack(knightIsAwake) {
    //knightIsAwake = true -> false (não pode retornar o ataque)
    //knightIsAwake = false -> true (ATACARRRRR)
    return !knightIsAwake;
  }
  
  /**
   * A useful spy captures information, which they can't do if everyone's asleep.
   *
   * @param {boolean} knightIsAwake
   * @param {boolean} archerIsAwake
   * @param {boolean} prisonerIsAwake
   *
   * @returns {boolean} Whether or not you can spy on someone.
   */
  export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    //canSpy (false, false, false) -> false
    //canSpy (true, false, false) -> true
    //canSpy (false, true, false) -> true
    //canSpy (false, false, true) -> true
    //canSpy (true, true, true) -> true
    return knightIsAwake || archerIsAwake || prisonerIsAwake;
  }
  
  /**
   * You'll get caught by the archer if you signal while they're awake.
   *
   * @param {boolean} archerIsAwake
   * @param {boolean} prisonerIsAwake
   *
   * @returns {boolean} Whether or not you can send a signal to the prisoner.
   */
  export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    //canSignalPrisoner (true, true) -> false
    //canSignalPrisoner (false, true) -> true
    //canSignalPrisoner (true, false) -> false
    //canSignalPrisoner (false, false) -> false
    return !archerIsAwake && prisonerIsAwake;
  }
  
  /**
   * The final stage in the plan: freeing Annalyn's best friend.
   *
   * @param {boolean} knightIsAwake
   * @param {boolean} archerIsAwake
   * @param {boolean} prisonerIsAwake
   * @param {boolean} petDogIsPresent
   *
   * @returns {boolean} Whether or not you can free Annalyn's friend.
   */
  export function canFreePrisoner(
    knightIsAwake,
    archerIsAwake,
    prisonerIsAwake,
    petDogIsPresent,
  ) {
    //canFreePrisoner (false, false, true, false) -> true
    //canFreePrisoner (false, false, true, true) -> true  
    //canFreePrisoner (true, false, true, true) -> true
    const isMinimunRequired = !archerIsAwake;
    const Caso1 = petDogIsPresent;
    const Caso2 = !petDogIsPresent && !knightIsAwake && prisonerIsAwake;
    return isMinimunRequired && (Caso1 || Caso2);
  }