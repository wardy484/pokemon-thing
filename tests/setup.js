import '@testing-library/jest-dom'
import Vue from 'vue'
import Vuetify from 'vuetify'
import { mocked } from 'ts-jest/utils'
import flushPromises from 'flush-promises'

Vue.use(Vuetify)

global.mocked = mocked
global.flushPromises = flushPromises
