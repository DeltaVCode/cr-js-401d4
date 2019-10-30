import { useContext } from 'react';
import { ThemeContext } from './theme-context';

export default function useSettings() {
  return useContext(ThemeContext);
}
