import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pbnribhzarilzyrbaqbi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBibnJpYmh6YXJpbHp5cmJhcWJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2MjE2MzgsImV4cCI6MjA1MzE5NzYzOH0.AZ3EVeOjgKxYkq-2twtG_r8_eC28PMYNvLj2goZRqU4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})