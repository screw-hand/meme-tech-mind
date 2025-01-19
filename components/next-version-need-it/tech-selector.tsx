export function TechSelector({
  value,
  onChange
}: {
  value: any | null; // TODO any
  onChange: ( value: any | null) => void;
}) {
  console.log(value)
  console.log(onChange)
  return <div>TechSelector</div>;
}
