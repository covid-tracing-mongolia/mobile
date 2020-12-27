package mn.covid.app.extensions

import kotlinx.coroutines.delay

suspend fun <T> withDelay(timeMillis: Long, block: () -> T): T {
    delay(timeMillis)
    return block()
}