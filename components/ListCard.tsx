interface Props {
  icon: any;
  header: string;
  list: { icon: any; text: string }[];
}

export default function ListCard(props: Props) {
  const { icon, header, list } = props;
  return (
    <div className="rounded-md overflow-hidden shadow-lg p-4 w-64">
      <div className="px-6 py-4">
        <div className="flex text-xl mb-2 gap-2">
          {icon}
          {header}
        </div>
        <ul className="list-none list-inside text-gray-700">
          {list.map((item, i) => (
            <li key={`item-${i}}`}>
              <div className="flex gap-2">
                {item.icon} {item.text}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
