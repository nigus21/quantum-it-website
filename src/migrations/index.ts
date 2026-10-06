import * as migration_20261005_085343 from './20261005_085343';
import * as migration_20261005_105433_add_quantum_collections_and_blocks from './20261005_105433_add_quantum_collections_and_blocks';
import * as migration_20261005_133546_check_users_sessions from './20261005_133546_check_users_sessions';

export const migrations = [
  {
    up: migration_20261005_085343.up,
    down: migration_20261005_085343.down,
    name: '20261005_085343',
  },
  {
    up: migration_20261005_105433_add_quantum_collections_and_blocks.up,
    down: migration_20261005_105433_add_quantum_collections_and_blocks.down,
    name: '20261005_105433_add_quantum_collections_and_blocks',
  },
  {
    up: migration_20261005_133546_check_users_sessions.up,
    down: migration_20261005_133546_check_users_sessions.down,
    name: '20261005_133546_check_users_sessions'
  },
];
