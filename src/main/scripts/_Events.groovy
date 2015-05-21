description "Runs Grunt ",""

println "Grunt Running...."

final def process = "grunt".execute()
process.consumeProcessOutput(System.out,System.err)

Thread shutDown = new Thread(
        new Runnable() {
            @Override
            void run() {
                process.destroy()
            }
        }
)

Runtime.runtime.addShutdownHook(shutDown)