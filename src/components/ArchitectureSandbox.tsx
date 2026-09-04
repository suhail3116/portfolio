import React, { useState } from 'react';
import { Code2 } from 'lucide-react';

export const ArchitectureSandbox: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'eventbus' | 'webgl' | 'graphql'>('eventbus');

  const snippets = {
    eventbus: `// Go High-Throughput Event Worker Queue
package worker

type EventBus struct {
    workers  int
    channels []chan Event
}

func NewEventBus(workers int) *EventBus {
    eb := &EventBus{workers: workers}
    for i := 0; i < workers; i++ {
        ch := make(chan Event, 10000)
        eb.channels = append(eb.channels, ch)
        go eb.processChannel(ch)
    }
    return eb;
}`,
    webgl: `// WebGL Hardware Accelerated Chart Shader
const vertexShaderSource = \`
  attribute vec2 a_position;
  uniform vec2 u_resolution;
  void main() {
    vec2 zeroToOne = a_position / u_resolution;
    vec2 clipSpace = (zeroToOne * 2.0) - 1.0;
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
  }\`;`,
    graphql: `# Federated GraphQL Schema Architecture
type MicroserviceNode @key(fields: "id") {
  id: ID!
  name: String!
  healthStatus: HealthEnum!
  throughputP99: Float!
  dependencies: [MicroserviceNode!]!
}`
  };

  return (
    <section id="architecture" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
          <Code2 className="size-3.5" /> Code Quality & Design
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">System Architecture & Clean Code</h2>
        <p className="text-slate-400 text-base max-w-2xl mb-8">
          Inspecting production-grade code patterns, async concurrency logic, and federated schema definitions.
        </p>

        <div className="bg-[#080c14] border border-[#00f0ff]/30 rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex bg-[#0e1420] border-b border-white/10">
            <button
              onClick={() => setActiveTab('eventbus')}
              className={`px-6 py-3.5 text-xs font-mono font-semibold border-b-2 transition-all ${
                activeTab === 'eventbus'
                  ? 'border-[#00f0ff] text-[#00f0ff] bg-[#00f0ff]/5'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              ⚡ Go Concurrent EventBus
            </button>
            <button
              onClick={() => setActiveTab('webgl')}
              className={`px-6 py-3.5 text-xs font-mono font-semibold border-b-2 transition-all ${
                activeTab === 'webgl'
                  ? 'border-[#00f0ff] text-[#00f0ff] bg-[#00f0ff]/5'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              🎨 WebGL Canvas Shader
            </button>
            <button
              onClick={() => setActiveTab('graphql')}
              className={`px-6 py-3.5 text-xs font-mono font-semibold border-b-2 transition-all ${
                activeTab === 'graphql'
                  ? 'border-[#00f0ff] text-[#00f0ff] bg-[#00f0ff]/5'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              📡 GraphQL Schema Federation
            </button>
          </div>

          <div className="p-8">
            <pre className="font-mono text-sm leading-relaxed text-slate-200 overflow-x-auto">
              <code>{snippets[activeTab]}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
