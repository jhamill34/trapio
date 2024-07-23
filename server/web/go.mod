module github.com/jhamill34/trapio/server/web

go 1.22.5

require github.com/google/wire v0.6.0

// TODO: This is just my personal fork of the repo with my fix in
//  Remove this if:
//  - https://github.com/google/wire/pull/410 gets merged OR
//  - https://github.com/google/wire/issues/403 gets resolved
replace github.com/google/wire => github.com/jhamill34/wire v0.1.0
