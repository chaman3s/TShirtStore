const images = Object.entries(
  import.meta.glob("../../assets/images/img*.webp", { eager: true, import: 'default' })
)
  .map(([path, src]) => ({
    src,
    num: parseInt(path.match(/img(\d+)\.webp/)?.[1] || "0", 10),
  }))
  .sort((a, b) => a.num - b.num)
  .map((img) => img.src); // Optional: just get array of paths

const data = {
  title: "Shane Weber",
  images,
};

export default data;
