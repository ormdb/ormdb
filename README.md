# OrmDB - a ORM tool for .Net / .Net.Core

OrmDB is a simple, fast and lightweight embedded .NET ORM tool which was inspired by the equivalent other tools.

**You can read documentation for more detail. [Wiki](https://github.com/ormdb/ormdb/wiki).**

<br/>

## Download

OrmDB has no no dependencies. You can [**DOWNLOAD**](https://github.com/ormdb/ormdb/releases) from releases, into your Bin folder and add it as Reference.

<br/>

## How to use
A example for selection records with join:
```C#
var _sql = SQL.X.Select().From(h);
    _sql.LeftJoin(l, (l.Year == h.Year) & (l.Id  == h.Id) )
    _sql.Where = h.Year.In(new[] {2018, 2019}) &
                 h.Id.IsNotNull();
    _sql.Skip(5).Top(10);
    _sql.OrderBy(h.Year);

foreach (var _row in _s.ExecuteReader(_cn))
    var _value = _row(h.Id).ToString();
}
```
**You can read documentation for more detail. [Wiki](https://github.com/ormdb/ormdb/wiki).**

<br/>

## Where to use?
* All desktop/web application needs to be database operations
* Multi database operation
* Multi client application
* .Net / Asp.Net / .Net Core / Asp.Net Core

<br/>

## Changelog

Change details for each release are documented in the [release notes](https://github.com/ormdb/ormdb/releases).

<br/>

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017 - OrmDb

