// Aleth: Ethereum C++ client, tools and libraries.
// Copyright 2014-2019 Aleth Authors.
// Licensed under the GNU General Public License, Version 3.

#include "SHA3.h"
#include "RLP.h"

#include <cryptopp/keccak.h>

namespace dev
{
h256 const EmptySHA3 = sha3(bytesConstRef());
h256 const EmptyListSHA3 = sha3(rlpList());

bool sha3(bytesConstRef _input, bytesRef o_output) noexcept
{
    if (o_output.size() != 32)
        return false;

    CryptoPP::Keccak_256 k256;
    if (_input.size() > 0)
        k256.Update(_input.data(), _input.size());

    CryptoPP::byte out[32];
    k256.TruncatedFinal(out, 32);
    bytesConstRef{out, 32}.copyTo(o_output);
    return true;
}
}  // namespace dev
