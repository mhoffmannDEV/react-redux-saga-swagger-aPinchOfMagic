export interface SessionStoreState {
  readonly name: string,
  readonly surname: string,
}

export interface RootStoreState {
  readonly session: SessionStoreState,
}

