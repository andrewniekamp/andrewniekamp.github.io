interface Props {
  active: boolean;
  label: string;
  position: number;
  selectTab: (index: number) => void;
}

export default function Tab(props: Props) {
  const { active, label, position, selectTab } = props;
  return (
    <li>
      <a
        href="#"
        onClick={() => selectTab(position)}
        className={`${
          active
            ? " active border-b-blue-400 dark:border-blue-500 dark:text-blue-500 text-blue-600"
            : " hover:border-gray-300 dark:hover:text-gray-300 hover:text-gray-600 border-transparent"
        } border-b-2 inline-block p-4 rounded-t-lg`}
        aria-current={active}
      >
        {label}
      </a>
    </li>
  );
}
