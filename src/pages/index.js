import React from 'react';
import Layout from "../components/layout";

import './index.css';

import profile from "./profile_600_converted.jpg";

const IndexPage = () => (
  <main>
    <section className="about-me">
      <img src={ profile }
          className="profile"
          alt="Profile" />

      <h1>Hello! My name is Casey Leask.</h1>
      <h3>I’m looking for a new role as CTO, VP/Head of Engineering, or similar, remote or in Melbourne.</h3>
      <ul>
        <li>Proven experience leading teams in highly skilled agile development teams, with a track record of successful delivery in large-scale, commercial software teams.</li>
        <li>Has experience proposing, building and taking proof of concepts all the way to leading the new business initiatives.</li>
        <li>Comfortable taking new business initiatives and providing multiple options for solutions that meet development, operational and architectural expectations.</li>
      </ul>
    </section>
    <table className="socialdeets">
      <tbody>
        <tr>
          <td>Email</td>
          <td>Firstname and Lastname at gmail dot com.</td>
        </tr>
        <tr>
          <td>Twitter</td>
          <td><a href="https://twitter.com/CaseyLeask">@CaseyLeask</a></td>
        </tr>
        <tr>
          <td>LinkedIn</td>
          <td><a href="https://www.linkedin.com/in/caseyleask/">caseyleask</a></td>
        </tr>
      </tbody>
    </table>

    <br />

    <section className="summary">
      <h4>Some things I agree with</h4>
      <p>I've learnt a great deal from other people. Instead of attempting to rephrase or claim credit, I'm going to list a lot of principles (with links) that I found interesting and changed how I view software.</p>
      <p>Happy to talk at length about anything in this list!</p>
      <p>(This list may expand or shrink at a moment's notice.)</p>
    </section>

    <ul className="principles-and-practices">
      <li>
        <h3>Asynchronous communication over synchronous communication </h3>
        <p><a href="http://blog.xebia.com/microservices-architecture-principle-4-asynchronous-communication-over-synchronous-communication">http://blog.xebia.com/microservices-architecture-principle-4-asynchronous-communication-over-synchronous-communication</a></p>
      </li>

      <li>
        <h3>Simple over Complex</h3>
        <blockquote cite="https://en.wikiquote.org/wiki/John_Gall">
          <p>A complex system that works is invariably found to have evolved from a simple system that worked.</p>
          <p>A complex system designed from scratch never works and cannot be patched up to make it work.</p>
          <p>You have to start over, beginning with a working simple system.</p>
          <cite>John Gall</cite>
        </blockquote>
      </li>

      <li>
        <h3>Infrastructure as Code</h3>
        <p>Apply the same standards of quality, consistency and repeatability of behaviour to your infrastructure as you do to your code.</p>
      </li>

      <li>
        <h3>Autonomy vs. Leverage</h3>
        <p>Have an agreed understanding of what areas we're interested in providing autonomy, and what areas of common function we should be leveraging.</p>
        <p><a href="https://svpg.com/autonomy-vs-leverage/">https://svpg.com/autonomy-vs-leverage</a></p>
      </li>

      <li>
        <h3>Work in the spirit of agile</h3>
        <p><a href="agilemanifesto.org">agilemanifesto.org</a></p>
      </li>

      <li>
        <h3>Defense in depth</h3>
        <p>Don't rely on firewalls or any other single feature to keep you safe. Bake in security practices at every single layer of your infrastructure and architecture.</p>
        <p><a href="https://en.wikipedia.org/wiki/Defense_in_depth_(computing)">https://en.wikipedia.org/wiki/Defense_in_depth_(computing)</a></p>
      </li>

      <li>
        <h3>You build it, you own it</h3>
        <p>A direct mapping of DevOps principles</p>
        <p><a href="https://www.goodreads.com/book/show/26083308-the-devops-handbook">https://www.goodreads.com/book/show/26083308-the-devops-handbook</a></p>
      </li>

      <li>
        <h3>Bounded Contexts</h3>
        <p>Build services around <a href="https://martinfowler.com/bliki/BoundedContext.html">Bounded Contexts</a>.</p>
        <p>Deal with large models by dividing them into different Bounded Contexts and being explicit about their interrelationships.</p>
      </li>

      <li>
        <h3>Privacy by Design</h3>
        <p>In dealing with any Personally Identifiable Information, have a Subject Matter Expert on Australian Privacy Laws and Data Retention Laws.</p>
      </li>

      <li>
        <h3>Trust, but Verify</h3>
        <p>Don't try to be a gatekeeper, instead, ensure that everyone has the skills, knowledge and tools necessary to release changes in a safe way.</p>
        <p>Verify with runtime monitoring tools, WAFs and other realtime tooling.</p>
      </li>

      <li>
        <h3>Mean Time to Recovery, not Mean Time Between Failures</h3>
        <p>In a distributed computing environment, failures are inevitable.</p>
        <p>It's more pragmatic to plan for failure and test for it.</p>
      </li>

      <li>
        <h3>Have a single source of truth for all data</h3>
        <p>For example, if a user's name changes, it should only need to change in one place to replicate throughout all systems.</p>
      </li>

      <li>
        <h3>Security at the start</h3>
        <p>The most expensive security failure is the one that's already happened.</p>
      </li>

      <li>
        <h3>Understand the 12 Factor Model</h3>
        <p><a href="https://12factor.net/">https://12factor.net/</a></p>
      </li>

      <li>
        <h3>Understand the Fallacies of distributed computing, and how it relates to what you build</h3>
        <p><a href="https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing">https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing</a></p>
      </li>

      <li>
        <h3>Apply Capacity Planning to Cloud Usage</h3>
        <p>Building in the cloud still costs money to the business, that should be planned and budgeted for.</p>
      </li>

      <li>
        <h3>Collect Raw Events, aggregate later</h3>
        <p>There's no recovering raw events from aggregates, but aggregates can always be calculated later</p>
      </li>

      <li>
        <h3>Understand your testing options</h3>
        <p><a href="https://medium.com/@copyconstruct/testing-microservices-the-sane-way-9bb31d158c16">https://medium.com/@copyconstruct/testing-microservices-the-sane-way-9bb31d158c16</a></p>
        <p>For example, personally, I favour Contract Testing over Integration Testing.</p>
        <p>With a complex system, production cannot be accurately reproduced.</p>
        <p>When relying on Integration testing, every discrepancy from production to the testing environment is an untested venue for failure.</p>
        <p>Contract Testing provides better coverage, see <a href="https://www.destroyallsoftware.com/talks/boundaries">https://www.destroyallsoftware.com/talks/boundaries</a> and <a href="http://blog.thecodewhisperer.com/permalink/integrated-tests-are-a-scam">http://blog.thecodewhisperer.com/permalink/integrated-tests-are-a-scam</a></p>
      </li>

      <li>
        <h3>Have a standard way of understanding the health and historical behaviour of every system</h3>
        <p>If you're awoken at 3 AM, all the information you need to diagnose an issue should already have been collected.</p>
        <p>Collect a record of all steps that needed to be taken to stabilise and resolve the issue, and fix any gaps in data collection. SSH is often a crutch for poor observability of a system.</p>
      </li>

      <li>
        <h3>Global Mutable State</h3>
        <p>Avoid these three wherever possible. </p>
      </li>

      <li>
        <h3>Exploit native strengths and avoid generalising to irrelevant areas</h3>
        <p>Favour programming languages native to the operating system</p>
        <p>Use Cloud tooling specific to the platform unless you have a very compelling reason otherwise</p>
      </li>

      <li>
        <h3>Put all State in Managed Services</h3>
        <p>Unless you're a database vendor, it's not your core competency. Lean on services who can provide better support than the business could ever justify.</p>
      </li>

      <li>
        <h3>Test your backups</h3>
        <p>A backup isn't working until you can prove that it works. Think of the consequences of a backup failing, and plan for this as well.</p>
      </li>

      <li>
        <h3>Roll Forward</h3>
        <p>If you're building fast, reliable deployment mechanisms, rolling forward is the known, working path of deployment. Rollback mechanisms are another venue for failure that's rarely tested.</p>
      </li>

      <li>
        <h3>Base access on Roles, and assign Individuals to these</h3>
        <p>Roles automatically rotate, whereas indivudual access Keys are long-lived, with weak validation of the source of where they are used.</p>
        <p>(If someone leaks a Role name on GitHub, you won't be in danger like a leaked Access Key)</p>
      </li>

      <li>
        <h3>Build a Learning Culture</h3>
        <p>In a multi-disciplinary team, the specialists are responsible for coaching and training others in their skillset. Use regular gatherings of functional skill groups to reinforce patterns and share learning.</p>
        <p><a href="https://medium.com/@jpcontad/building-a-learning-culture-in-tech-organizations-dec03b0924ba">https://medium.com/@jpcontad/building-a-learning-culture-in-tech-organizations-dec03b0924ba</a></p>
      </li>

      <li>
        <h3>Hold blameless Post-Mortems</h3>
        <p><a href="https://codeascraft.com/2012/05/22/blameless-postmortems/">https://codeascraft.com/2012/05/22/blameless-postmortems/</a></p>
      </li>

      <li>
        <h3>Context is king</h3>
        <p>Keep a historical record of Architecture decisions.</p>
        <p>Similar to how we use git history to understand the context behind a codebase, architectures decisions are equally crucial.</p>
        <p><a href="https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records">https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records</a></p>
      </li>

      <li>
        <h3>Prefer Services to Vendors</h3>
        <p>Vendor products seldom neatly match the particular requirements of a business, whereas a service use can be customised to unique business needs.</p>
      </li>

      <li>
        <h3>Understand the guarantees of reliability every services provides to the business</h3>
        <p>SLAs, SLOs, SLIs, whichever metric you decide on, monitor and adjust behaviour accordingly.</p>
      </li>

      <li>
        <h3>Innovation requires slack time</h3>
        <p>Hack Days, 20% time, Fix-it Fridays, whichever solutions works for your business in giving engineers dedicated time to work on what they see as high priority.</p>
        <p>This may manifest in engineers automating and refactoring problem areas, or it may lead to surprising innovation. </p>
      </li>

      <li>
        <h3>Write all services like they're public</h3>
        <p>Strict guidelines in how internal service communication happens leads to tighter interfaces and less undefined behaviour.</p>
        <p><a href="https://apievangelist.com/2012/01/12/the-secret-to-amazons-success-internal-apis/">https://apievangelist.com/2012/01/12/the-secret-to-amazons-success-internal-apis/</a></p>
      </li>
    </ul>
  </main>
);

export default props => (
  <Layout data={props.data}>
    <IndexPage />
  </Layout>
);
