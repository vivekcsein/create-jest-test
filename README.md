<h1>Jest Testing Library with Next.js</h1>

<p>create-next-app</p>

<p>

    bun create next-app@latest .

</p>

<p>packages to install</p>
<p>

    bun add --dev jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node @types/jest

</p>

<p>now init jest config </p>

<p>

    npm init jest@latest

</p>

<p>now choose the jest config file</p>

<p>Would you like to use Jest when running "test" script in "package.json ?
"YES"
</p>
<p>Would you like to use Typescript for the configuration file?
"YES"

</p>
<p>Choose the test environment that will be used for testing.
jsdom

</p>
<p>Which provider should be used to instrument code for coverage?
v8

</p>
<p>Do you want Jest to add coverage reports?
"YES"

</p>
<p>Automatically clear mock calls, instances, contexts and results before every test?
"YES"

</p>

<p>Copy paste in jest.config.ts and wrap config with createJestConfig</p>

<p>

    import nextJest from 'next/jest.js'

    const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test    environment
    dir: './',
    })

</p>

<p>paste inside jest.setup.ts</p>

<p>

    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

</p>

<p>create jest.setup.ts and copy and paste in jest.setup.ts</p>

<p>

    import '@testing-library/jest-dom'

</p>

<p>add watch in package.json</p>

<p>
    
    "jest:watch": "jest --watch"
</p>
