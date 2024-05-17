import { motion } from 'framer-motion';

import TimeCard from './time-card';

const DayComponent: React.FC = () => {
  return (
    <TimeCard bgClassName="bg-gradient-to-br from-[#0A8DFF] to-[#98CFFF]" timeClassName="text-current">
      <motion.div
        animate={{
          scale: [1, 1.1, 1.1, 1, 1],
        }}
        className="absolute bottom-0 right-0 rounded-tl-full bg-white/10 pl-2 pt-2 md:pl-4 md:pt-4"
        transition={{
          duration: 4,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <motion.div>
          <div className="bottom-0 right-0 rounded-tl-full bg-white/20 pl-2 pt-2 md:pl-4 md:pt-4">
            <div className="bottom-0 right-0 rounded-tl-full bg-white/20 pl-2 pt-2 md:pl-4 md:pt-4">
              <motion.div
                animate={{ scale: [1, 0.9, 0.9, 1, 1] }}
                className="relative size-48 rounded-tl-full bg-[#FEEA9A]"
                initial={false}
                transition={{
                  duration: 4,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </TimeCard>
  );
};

export default DayComponent;
