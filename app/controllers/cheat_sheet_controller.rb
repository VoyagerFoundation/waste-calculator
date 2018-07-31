class CheatSheetController < ApplicationController
  def show
    @facts = Fact.all
  end
end
