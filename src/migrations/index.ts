import * as migration_20250104_191955 from './20250104_191955';
import * as migration_20250105_013015 from './20250105_013015';

export const migrations = [
  {
    up: migration_20250104_191955.up,
    down: migration_20250104_191955.down,
    name: '20250104_191955',
  },
  {
    up: migration_20250105_013015.up,
    down: migration_20250105_013015.down,
    name: '20250105_013015'
  },
];
