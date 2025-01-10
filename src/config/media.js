export const size = {
    xxl: "1400px",
    xl: "1200px",
    md: "992px",
    minsm: "768px",
    sm: "767px",
    xs: "572px",
};
export const media = {
    xxl: `@media (min-width:${size.xxl})`,
    xl: `@media (min-width:${size.xl})`,
    md: `@media (min-width:${size.md})`,
    minsm: `@media (min-width:${size.minsm})`,
    sm: `@media (max-width:${size.sm})`,
    xs: `@media (max-width:${size.xs})`,
};
