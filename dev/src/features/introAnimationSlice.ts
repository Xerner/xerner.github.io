import { PayloadAction, SliceCaseReducers, createSlice } from '@reduxjs/toolkit'
import * as cookies from 'functions/cookies'

interface IntroAnimationState {
    introHasPlayed: boolean
}

export const introAnimationSlice = createSlice<IntroAnimationState, SliceCaseReducers<IntroAnimationState>, string>({
  name: 'counter',
  initialState: {
    introHasPlayed: cookies.getCookie('introHasPlayed') === 'true'
  },
  reducers: {
    set: (state, action: PayloadAction<boolean>) => { 
        state.introHasPlayed = action.payload 
        cookies.setCookie('introHasPlayed', state.introHasPlayed.toString())
    }
  }
})

export const { set } = introAnimationSlice.actions
export default introAnimationSlice.reducer
