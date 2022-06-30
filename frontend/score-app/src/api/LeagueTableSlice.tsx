import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getLeagueTable = createAsyncThunk(
  'todos/getTodoAsync',
  async () => {
    const resp = await fetch ('')
  }
)