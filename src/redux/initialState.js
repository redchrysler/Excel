import {defaultStyles, defaultTitle} from '@/constants'
import {clone} from "@core/utils";

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles,
}

const normalize = state => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: '',
  openedDate: new Date().toJSON()
})


export function normalizeInitualState(state) {
  return state ? normalize(state) : clone(defaultState)
}