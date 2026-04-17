import { createClient } from '@supabase/supabase-js';

const url = 'https://rjoofvfyozqktuxsximr.supabase.co';
const key = 'sb_publishable_lZYSaMRmU2xmLiTc-lE2-w_hGVOL3bR';

export const supabase = createClient(url, key);
