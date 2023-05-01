import Tab from "@/components/Tab";
import {
  ABOUT_CARDS,
  ABOUT_DETAILED_SUMMARY,
  ABOUT_TABS,
  ABOUT_TAB_DETAILED,
  ABOUT_TAB_RPG,
  ABOUT_TAB_SIMPLE,
} from "@/utils/constants-about";
import { useState } from "react";
// import CharacterSheet from "../components/character-sheet/CharacterSheet";
import ListCard from "@/components/ListCard";

export default function About() {
  const [tab, setTab] = useState(0);

  return (
    <main className="flex flex-col justify-center items-center p-2 md:p-8">
      <p className="responsive-header max-w-screen text-center">About Me</p>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          {ABOUT_TABS.map((label, i) => (
            <Tab
              key={`tab-${i}}`}
              active={tab === i}
              label={label}
              position={i}
              selectTab={setTab}
            />
          ))}
        </ul>
      </div>
      <div className="max-w-2xl">
        <div className="mt-4">
          {ABOUT_TABS[tab] === ABOUT_TAB_SIMPLE ? (
            <>
              {/* SIMPLE */}
              <div className="flex gap-4 flex-wrap justify-center">
                {ABOUT_CARDS.map((card, i) => (
                  <ListCard
                    key={`card-${i}}`}
                    icon={card.icon}
                    header={card.header}
                    list={card.list}
                  />
                ))}
              </div>
            </>
          ) : ABOUT_TABS[tab] === ABOUT_TAB_DETAILED ? (
            <>
              {/* DETAILED */}
              <div className="flex flex-col gap-4 p-4">
                {ABOUT_DETAILED_SUMMARY}
              </div>
            </>
          ) : (
            ABOUT_TABS[tab] === ABOUT_TAB_RPG && (
              <>
                {/* RPG STYLE */}
                {/* <CharacterSheet /> */}
              </>
            )
          )}
          <div></div>
        </div>
      </div>
    </main>
  );
}
