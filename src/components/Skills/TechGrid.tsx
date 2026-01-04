import { motion } from 'framer-motion';

interface TechItem {
  name: string;
  icon: string;
  years: number;
  category: 'languages' | 'bigdata' | 'cloud' | 'tools';
}

const techStack: TechItem[] = [
  // Languages & Databases
  { name: 'Python', icon: '🐍', years: 8, category: 'languages' },
  { name: 'SQL', icon: '🗃️', years: 8, category: 'languages' },
  { name: 'PostgreSQL', icon: '🐘', years: 6, category: 'languages' },
  { name: 'DynamoDB', icon: '📊', years: 3, category: 'languages' },

  // Big Data
  { name: 'Spark', icon: '⚡', years: 5, category: 'bigdata' },
  { name: 'Kafka', icon: '📨', years: 3, category: 'bigdata' },
  { name: 'Hive', icon: '🐝', years: 4, category: 'bigdata' },
  { name: 'HDFS', icon: '💾', years: 4, category: 'bigdata' },

  // Cloud
  { name: 'AWS', icon: '☁️', years: 6, category: 'cloud' },
  { name: 'Snowflake', icon: '❄️', years: 4, category: 'cloud' },
  { name: 'GCP', icon: '🌐', years: 2, category: 'cloud' },
  { name: 'BigQuery', icon: '📈', years: 2, category: 'cloud' },

  // Tools
  { name: 'dbt', icon: '◆', years: 3, category: 'tools' },
  { name: 'Airflow', icon: '🌀', years: 5, category: 'tools' },
  { name: 'Dagster', icon: '⬡', years: 1, category: 'tools' },
  { name: 'Tableau', icon: '📊', years: 5, category: 'tools' },
];

const categories = [
  { id: 'languages', label: 'Languages & Databases' },
  { id: 'bigdata', label: 'Big Data' },
  { id: 'cloud', label: 'Cloud & Warehouses' },
  { id: 'tools', label: 'Tools & Orchestration' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function TechGrid() {
  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <div key={category.id}>
          <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
            {category.label}
          </h4>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {techStack
              .filter((tech) => tech.category === category.id)
              .map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={item}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="card p-4 text-center cursor-pointer"
                >
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <h5 className="font-semibold text-slate-900 dark:text-white">
                    {tech.name}
                  </h5>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {tech.years} {tech.years === 1 ? 'year' : 'years'}
                  </p>
                </motion.div>
              ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
