import * as AppStateAction from "./Actions/AppStateAction";
import AppState from "./AppState";

export default function createAppReducer(initialState: AppState) {
  return (state = initialState, action: AppStateAction.Actions): AppState => {
    switch (action.type) {
      case AppStateAction.CHANGE_URL:
        return {
          ...state,
          nowUrl: action.url,
        };
      case AppStateAction.APPEND_SUPERCHAT: {
        const superChats = state.superChats;
        if (superChats[action.videoId] == null) {
          superChats[action.videoId] = [action.superChat];
        } else {
          superChats[action.videoId] = [...superChats[action.videoId], action.superChat];
        }
        return {
          ...state,
          superChats,
        };
      }
      case AppStateAction.CHECKED_SUPERCHAT: {
        state.superChats[action.videoId][action.index].checked = true;

        state.superChats[action.videoId] = [...state.superChats[action.videoId]];

        return {
          ...state,
        };
      }

      case AppStateAction.CHANGE_BOUYOMICHAN_STATE: {
        return {
          ...state,
          bouyomiChanEnabled: action.enabled,
        };
      }
    }

    return state;
  };
}
