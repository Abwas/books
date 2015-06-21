var ninja = {
  chirp : function signal( n ) {
    return n > 1 ? signal( n - 1 ) + '-chirp' : 'chirp';
  }
};

module.exports = ninja;
