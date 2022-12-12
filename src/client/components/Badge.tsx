export function Badge(props: { message: string }) {
  return (
    <div className="absolute top-4 mx-auto grid w-full px-8">
      <span className="mx-auto rounded-lg border border-neutral-200 bg-neutral-100 px-4 py-2 text-center">
        {props.message}
      </span>
    </div>
  );
}
