import { useContext } from 'react';
import { SettingsContext } from './site-context';

export default function useSettings() {
  return useContext(SettingsContext);
}
