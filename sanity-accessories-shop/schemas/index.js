import {defineConfig} from 'sanity'
import banner from "./banner";
import product from "./product";

export const schemaTypes = [product, banner]

export default defineConfig({
    schema: {
        types: schemaTypes,
    },
})