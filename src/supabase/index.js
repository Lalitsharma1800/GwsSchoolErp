import { supabase } from "./supabase";
import authentication from "./authentication";

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export {supabase, authentication, delay}