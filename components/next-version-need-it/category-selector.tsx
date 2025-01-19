import { Category } from "@/types/meme"; // TODO 优化掉这个import，应该把types/meme.js改成d.ts文件

export function CategorySelector({
  value,
  onChange
}: {
  value: Category | null;
  onChange: (category: Category | null) => void;
}) {
  console.log(value)
  console.log(onChange)
  return <div>CategorySelector</div>;
}
