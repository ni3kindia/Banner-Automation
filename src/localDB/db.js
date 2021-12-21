import Dexie from 'dexie';

const db = new Dexie('automationBanner');
db.version(1).stores({
  bannerData: '++id, [jsonData]',  // Primary key and indexed props
});

export default db