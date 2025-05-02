"use server";

import { revalidatePath } from "next/cache";

export const revalidatePathAction = async path => {
    // if (Array.isArray(path)) {
    //     path.forEach(p => {
    //         revalidatePath(p);
    //     });
    //     return;
    // }
    revalidatePath(path);
};
