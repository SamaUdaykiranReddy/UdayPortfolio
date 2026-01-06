"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "./ui/Button";

export function CodeShowcase() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const codeExamples = [
    {
      title: "Microservices Architecture",
      language: "TypeScript",
      description: "Event-driven microservices with message queue",
      code: `// Event-driven microservices pattern
import { EventEmitter } from 'events';
import { MessageQueue } from './queue';

class MicroserviceOrchestrator extends EventEmitter {
  private queue: MessageQueue;
  
  async processOrder(order: Order) {
    // Emit event to inventory service
    await this.queue.publish('inventory.check', order);
    
    // Listen for inventory confirmation
    this.on('inventory.confirmed', async (data) => {
      await this.queue.publish('payment.process', data);
    });
    
    // Handle payment success
    this.on('payment.success', async (data) => {
      await this.queue.publish('shipping.create', data);
    });
  }
}`,
    },
    {
      title: "Performance Optimization",
      language: "React + TypeScript",
      description: "Advanced React optimization techniques",
      code: `// Virtual scrolling with intersection observer
import { useVirtualizer } from '@tanstack/react-virtual';

export function OptimizedList({ data }: Props) {
  const parentRef = useRef<HTMLDivElement>(null);
  
  const virtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
    overscan: 5,
  });
  
  return (
    <div ref={parentRef} className="h-screen overflow-auto">
      <div style={{ height: virtualizer.getTotalSize() }}>
        {virtualizer.getVirtualItems().map((item) => (
          <div key={item.key} style={{
            transform: \`translateY(\${item.start}px)\`
          }}>
            <ListItem data={data[item.index]} />
          </div>
        ))}
      </div>
    </div>
  );
}`,
    },
    {
      title: "System Design Pattern",
      language: "Go",
      description: "Circuit breaker pattern implementation",
      code: `// Circuit breaker for resilient microservices
type CircuitBreaker struct {
    maxFailures  int
    timeout      time.Duration
    failures     int
    lastFailTime time.Time
    state        State
}

func (cb *CircuitBreaker) Call(fn func() error) error {
    if cb.state == Open {
        if time.Since(cb.lastFailTime) > cb.timeout {
            cb.state = HalfOpen
        } else {
            return ErrCircuitOpen
        }
    }
    
    err := fn()
    if err != nil {
        cb.failures++
        cb.lastFailTime = time.Now()
        if cb.failures >= cb.maxFailures {
            cb.state = Open
        }
        return err
    }
    
    cb.reset()
    return nil
}`,
    },
  ];

  const handleCopy = async (code) => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {codeExamples.map((example, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 border-2 transition-all ${
              activeTab === index
                ? "border-foreground bg-foreground text-background"
                : "border-border hover:border-foreground"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-sm font-medium">{example.title}</div>
          </motion.button>
        ))}
      </div>

      {/* Code Display */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="border-2 border-border bg-zinc-950 text-zinc-100 overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-zinc-800">
          <div>
            <div className="font-medium mb-1">{codeExamples[activeTab].title}</div>
            <div className="text-sm text-zinc-400">{codeExamples[activeTab].description}</div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400 px-2 py-1 bg-zinc-800 rounded">
              {codeExamples[activeTab].language}
            </span>
            <Button
              onClick={() => handleCopy(codeExamples[activeTab].code)}
              variant="ghost"
              size="sm"
              className="text-zinc-400 hover:text-zinc-100"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Code */}
        <div className="p-6 overflow-x-auto">
          <pre className="text-sm font-mono">
            <code className="text-zinc-300 leading-relaxed">
              {codeExamples[activeTab].code}
            </code>
          </pre>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 border-2 border-border text-center">
          <div className="text-2xl mb-1">50K+</div>
          <div className="text-xs text-muted-foreground">Lines of Code</div>
        </div>
        <div className="p-4 border-2 border-border text-center">
          <div className="text-2xl mb-1">100%</div>
          <div className="text-xs text-muted-foreground">Test Coverage</div>
        </div>
        <div className="p-4 border-2 border-border text-center">
          <div className="text-2xl mb-1">A+</div>
          <div className="text-xs text-muted-foreground">Code Quality</div>
        </div>
      </div>
    </div>
  );
}
