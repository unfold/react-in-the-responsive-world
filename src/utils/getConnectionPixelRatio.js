const SLOW_CONNECTION_TYPE_PATTERN = /(^([23]g?)$)/

export default function() {
  const connection = navigator.connection
  const slow = connection && SLOW_CONNECTION_TYPE_PATTERN.test(connection.type)

  return (!slow && window.devicePixelRatio) || 1
}
