i = 5

while i > 4 do
    print([[
    Hello my name is Lucas and
    I'm writting a multiline string
    Oh! did I mention i did it in Lua ?
    ]])
    i= i -1
end



line = io.read()
print("Winter is " .. line)



if 1 == 1 then
    print(anUndefinedVar)
end

if not aBoolValue then print('twas false') end


for i = 1, 10, 1 do
    print(i)
end

print("Can i do this ?")
print('And this ?')


-- Another loop construct:
num = 4
repeat
  print('the way of the future')
  num = num - 1
until num == 0


t = {key1 = 'value1', key2 = false}

-- String keys can use js-like dot notation:
print(t.key1)  -- Prints 'value1'.
t.newKey = {}  -- Adds a new key/value pair.
t.key2 = nil   -- Removes key2 from the table.

--print t -- Why does it not work ?
print(t)
print "hola"


u = {['@!#'] = 'qbert', [{}] = 1729, [6.28] = 'tau'}
print(u[6.28])  -- prints "tau"
