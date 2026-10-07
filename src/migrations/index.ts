import * as migration_20261005_085343 from './20261005_085343';
import * as migration_20261005_105433_add_quantum_collections_and_blocks from './20261005_105433_add_quantum_collections_and_blocks';
import * as migration_20261005_133546_check_users_sessions from './20261005_133546_check_users_sessions';
import * as migration_20261006_162000_create_inquiries from './20261006_162000_create_inquiries';
import * as migration_20261007_112500_add_email_notifications_and_whatsapp from './20261007_112500_add_email_notifications_and_whatsapp';
import * as migration_20261007_131000_add_why_quantum_editorial_fields from './20261007_131000_add_why_quantum_editorial_fields';
import * as migration_20261007_141000_fix_why_quantum_layout_styles from './20261007_141000_fix_why_quantum_layout_styles';
import * as migration_20261007_151500_reorder_solutions_blocks from './20261007_151500_reorder_solutions_blocks';

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
    name: '20261005_133546_check_users_sessions',
  },
  {
    up: migration_20261006_162000_create_inquiries.up,
    down: migration_20261006_162000_create_inquiries.down,
    name: '20261006_162000_create_inquiries',
  },
  {
    up: migration_20261007_112500_add_email_notifications_and_whatsapp.up,
    down: migration_20261007_112500_add_email_notifications_and_whatsapp.down,
    name: '20261007_112500_add_email_notifications_and_whatsapp',
  },
  {
    up: migration_20261007_131000_add_why_quantum_editorial_fields.up,
    down: migration_20261007_131000_add_why_quantum_editorial_fields.down,
    name: '20261007_131000_add_why_quantum_editorial_fields',
  },
  {
    up: migration_20261007_141000_fix_why_quantum_layout_styles.up,
    down: migration_20261007_141000_fix_why_quantum_layout_styles.down,
    name: '20261007_141000_fix_why_quantum_layout_styles',
  },
  {
    up: migration_20261007_151500_reorder_solutions_blocks.up,
    down: migration_20261007_151500_reorder_solutions_blocks.down,
    name: '20261007_151500_reorder_solutions_blocks',
  },
];

