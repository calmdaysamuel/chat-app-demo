export class GlobalState {
  static instance: GlobalState = new GlobalState();

  username: String = '';

  constructor() {}
}
