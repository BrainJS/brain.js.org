<template>
  <div>
    <h2 class="title is-3">
      Getting Started
    </h2>
    <h3 class="subtitle is-4">There are multiple ways to use this library:</h3>

    <!-- NPM -->
    <h2 class="subtitle is-4">NPM</h2>
    <div class="content">
      <code>npm install --save brain.js</code>
    </div>

    <!-- CDN -->
    <h2 class="subtitle is-4">CDN</h2>
    <div class="content">
      <code>
        &lt;script src=&quot;//unpkg.com/brain.js&quot;&gt;&lt;/script&gt;
      </code>
    </div>

    <!-- Download -->
    <h2 class="subtitle is-4">Download</h2>
    <div class="content">
      <a
        href="//unpkg.com/brain.js"
        target="_blank"
        download="brain-browser.min.js"
        >Download Now</a
      >
    </div>

    <h2 class="title is-3">
      Installation note
    </h2>
    <div class="content">
      `Brain.js` depends on a native module `headless-gl` for gpu support. In
      most cases installing `brain.js` from npm should just work. However, if
      you run into problems, this mean prebuilt binaries are not able to
      download from github reporsitories and you might need to build it
      yourself.
    </div>

    <h2 class="title is-4">Building from source</h2>
    <div class="content">
      Please make sure the following dependencies are installed and up to date
      and then run:

      <pre><code>$ npm rebuild</code></pre>
    </div>

    <h3 class="title is-5">System dependencies</h3>
    <div class="content">
      <h3 class="title is-5">Mac OS X</h3>
      <ul>
        <li><a href="https://www.python.org/" rel="nofollow">Python 2.7</a></li>
        <li>
          <a href="https://developer.apple.com/xcode/" rel="nofollow">XCode</a>
        </li>
      </ul>

      <h3 class="title is-5">Ubuntu/Debian</h3>
      <ul>
        <li><a href="https://www.python.org/" rel="nofollow">Python 2.7</a></li>
        <li>
          A GNU C++ environment (available via the
          <code>build-essential</code> package on <code>apt</code>)
        </li>
        <li><a href="http://www.x.org/wiki/" rel="nofollow">libxi-dev</a></li>
        <li>Working and up to date OpenGL drivers</li>
        <li><a href="http://glew.sourceforge.net/" rel="nofollow">GLEW</a></li>
        <li>
          <a
            href="https://www.freedesktop.org/wiki/Software/pkg-config/"
            rel="nofollow"
            >pkg-config</a
          >
        </li>
      </ul>
      <pre><code>$ sudo apt-get install -y build-essential libxi-dev libglu1-mesa-dev libglew-dev pkg-config</code></pre>

      <h3 class="title is-5">Windows</h3>
      <ul>
        <li><a href="https://www.python.org/" rel="nofollow">Python 2.7</a></li>
        <li>
          <a
            href="https://www.microsoft.com/en-us/download/details.aspx?id=5555"
            rel="nofollow"
            >Microsoft Visual Studio</a
          >
        </li>
        <li>
          d3dcompiler_47.dll should be in c:\windows\system32, but if isn't then
          you can find another copy in the deps/ folder
        </li>
        <li>
          (optional) A modern nodejs supporting es6 to run some examples
          <a href="https://iojs.org/en/es6.html" rel="nofollow"
            >https://iojs.org/en/es6.html</a
          >
        </li>
      </ul>

      <p>
        * For general information on building native modules, see the node-gyp
        documentation.
      </p>
    </div>

    <h2 class="title is-3">
      Ready to start?
    </h2>
    <div class="content">
      <router-link to="/examples" title="Examples">
        View Live Examples
      </router-link>
      Or
      <a href="//github.com/BrainJS/brain.js#brainjs"
        >Continue to Documentation</a
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
