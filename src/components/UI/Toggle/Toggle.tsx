import { useTheme } from 'next-themes';
import styles from './styles.module.css'

export default function Toggle () {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center justify-center ">
      <label htmlFor="toogleA" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            id="toogleA"
            type="checkbox"
            checked={theme === "dark"}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            className="hidden"
          />
          <div className={`${styles.toggle__line} w-10 h-4 bg-gray-400 rounded-full shadow-inner`}></div>
          <div className={`${styles.toggle__dot} absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0`}></div>
        </div>
      </label>
    </div>
  );
}
